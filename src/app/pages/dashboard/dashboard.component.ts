import { Component, OnInit, Inject } from '@angular/core';
import Chart from 'chart.js';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dashboard.card.modal';
import { AuthService } from 'app/_services/auth/auth.service';
import { Router } from '@angular/router';
import { TemperatureService } from 'app/_services/temperature/temperature.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit {
  id: number;
  formTemp: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private _snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _TemperatureService: TemperatureService, private _authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.id = + this._authService.getIdUser();
    this.initForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initForm() {
    this.formTemp = new FormGroup({
      value: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    });
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.formTemp.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        console.log(name);
      }
    }
    return invalid;
  }

  addTemp() {
    this.formTemp.get('comment').setValue("Un commentaire");
    this.formTemp.get('date').setValue(new Date());
    if (this.formTemp.valid) {
      
      this._TemperatureService.addTemperature(this.id, this.formTemp.value).subscribe(success => {
          this.dialogRef.close();
          this._snackBar.open("Modification réaliser avec succès", "FERMER");
          location.reload();
      });
    }
  }

}
@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',

  styleUrls: ['dialog-overview-example.css'],
})
export class DashboardComponent implements OnInit {
  idUser: string;
  temperature: any;
  id: number;
  private temperatureList = [];
  private dateList = [];
  private temperatureDefautList = [];
  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private _TemperatureService: TemperatureService, private _authService: AuthService, private router: Router) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
    //Temperature
    this.idUser = this._authService.getIdUser();
    this.id = + this.idUser;
    this._TemperatureService.getTemperature(this.id).subscribe(data => {
      this.temperature = data;
      var lastTemperature = this.temperature.length;
      for (var i = 0; i < this.temperature.length; i++) {
        this.temperatureList.push(`${this.temperature[i].value}`);
        this.temperatureDefautList.push(37);
        //Format date
        const d = new Date(this.temperature[i].date)
        const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(d)
        const da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(d)
        const hr = new Intl.DateTimeFormat('fr', { hour: 'numeric' }).format(d)
        const mi = new Intl.DateTimeFormat('fr', { minute: 'numeric' }).format(d)
        //date en FR
        this.dateList.push(`${da}/${mo}/${ye} ${hr}${mi}`);
      }
      console.log(`${this.temperature[this.temperature.length-1].value}`);
      this.loadcanvas();

    });


  }
  loadcanvas() {

    var speedCanvas = document.getElementById("speedChart");

    var dataFirst = {
      data: this.temperatureList,
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var dataSecond = {
      data: this.temperatureDefautList,
      fill: false,
      borderColor: '#4acccd',
      backgroundColor: 'transparent',
      pointBorderColor: '#4acccd',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };


    var speedData = {
      labels: this.dateList,
      datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });



    this.canvas = document.getElementById("chartEmail");
    this.ctx = this.canvas.getContext("2d");
    this.chartEmail = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: [1, 2, 3],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#e3e3e3',
            '#4acccd',
            '#fcc468',
            '#ef8157'
          ],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }]
      },

      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      }
    });



    this.chartColor = "#FFFFFF";

    this.canvas = document.getElementById("chartHours");
    this.ctx = this.canvas.getContext("2d");

    this.chartHours = new Chart(this.ctx, {
      type: 'line',

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
        }
        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        },
      }
    });


  }
}

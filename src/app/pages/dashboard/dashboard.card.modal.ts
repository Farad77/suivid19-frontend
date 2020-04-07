import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

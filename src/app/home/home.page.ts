import { Component, OnInit } from '@angular/core';
import { Square } from '../interfaces/interfaces';
import { HelpersService } from '../services/helpers.service';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private helpers: HelpersService
    ) {}

    width
    height
    square:Square = {
    width: 0,
    height: 0

    }

    ngOnInit(){

    this.helpers.trip(

    [ 'A' , 'A', 'L', 'A' , 'A' ] , /// array de instrucciones

    {
    direction: 'A',
    orientation: 'N',
    coordinates: {
    xWidth: 1,
    yHeight: 1
    },
    successTrip: true // objeto rover inicial
    },


    /// tercer parametro que son las dimensiones del cuadrado
    {
    width: 200,
    height: 200
    })
    }




    getWidth(){

    if(this.width){
    this.square.width = parseInt(this.width);
    const dimensionsRes = `${this.width}px`;
    console.log('square', this.square)
    return dimensionsRes
    }

    }

    getHeight(){
    if(this.height){
    this.square.height = parseInt(this.height);
    const dimensionsRes = `${this.height}px`;
    console.log('square', this.square);

    return dimensionsRes
    }


    }


}

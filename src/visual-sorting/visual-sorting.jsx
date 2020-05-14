import React from 'react';
import  "./visual-sorting.css";

export default class VisualSort extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { array:[] };
    }

    //after app loads for the first time or after a reload, generate the random array by calling the method
    componentDidMount(){
        this.resetArray();
    }

    //a method that generates random value arrays for them to be sorted by the app
    resetArray(){
        const array = [];
        for(let i=0; i<290; i++){
            array.push(randomIntFromInterval(5, 600));
        }
        this.setState({array});
    }

    bubbleSort(){}
    
    insertionSort(){}
    
    heapSort(){}
    
    mergeSort(){}
    
    quickSort(){}

    selectionSort(){}


    render() {
        const {array} = this.state;
    
        return (
            <div className="array-container">

                {array.map((value, idx) => (
                <div className="array-bar" key={idx} style={{ height: `${value}px` }} > </div>
                ))}

                <button onClick={ () => this.resetArray() } className="button-space" >Generate new Arrays</button>
                <button onClick={ () => this.bubbleSort() } className="button-space" >Bubble Sort</button>
                <button onClick={ () => this.insertionSort() } className="button-space" >Insertion Sort</button>
                <button onClick={ () => this.heapSort() } className="button-space" >Heap Sort</button>
                <button onClick={ () => this.mergeSort() } className="button-space" >Merge Sort</button>
                <button onClick={ () => this.quickSort() } className="button-space" >Quick Sort</button>
                <button onClick={ () => this.selectionSort() } className="button-space" >Selection Sort</button>

            </div>
        );
      }
}

//function to generate random whole numbers in a given interval
//from : https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max-min+1) + min );
}
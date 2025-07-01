
import Select from 'react-select';
import React from 'react';
import {filteroptions} from "./filteroptions";



interface Props {
    value: string,
    label: string
}




interface Props {
    value: string;
}


export function filterMultiSelection(arr: Array<Props>) {
    const nono = document.getElementById("nono");
    if (nono) {
        nono.className = "noshow";
    }

    const filterableElements = document.getElementsByClassName("filterable");

    // Remove "show" class from all elements
    for (let i = 0; i < filterableElements.length; i++) {
        const el = filterableElements[i];
        w3RemoveClass(el, "show");
    }

    console.log("Begin");

    // Apply filter criteria
    for (let i = 0; i < filterableElements.length; i++) {
        const el = filterableElements[i];
        let shouldShow = true;

        for (const entry of arr) {
            console.log(`entry: ${entry.value}`);
            if (!el.classList.contains(entry.value)) {
                shouldShow = false;
                break;
            }
        }

        console.log(`shouldShow: ${shouldShow}`);
        if (shouldShow) {
            w3AddClass(el, "show");
        }
    }

    // Check if any element is shown
    const shownElements = document.getElementsByClassName("show");
    if (shownElements.length < 1 && nono) {
        console.log(shownElements.length);
        nono.className = "show";
    }
}



function w3AddClass(element: Element, name: string) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element: Element, name: string) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


export class FilterAction extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = (selectedOption: any) => {

        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)

        );
        filterMultiSelection(selectedOption)
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                isMulti
                options={filteroptions}
                defaultValue={{value: "all", label: "Show all"}}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        );
    }
}
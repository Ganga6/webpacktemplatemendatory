document.getElementById("doit").addEventListener("click", manipulate)

function manipulate() {
    let textelement: HTMLInputElement = <HTMLInputElement>document.getElementById("textin")
    let e: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select")
    let out = document.getElementById("preview")
    let text;
    if (e.options[e.selectedIndex].value == "upper") {
        text = textelement.value.toUpperCase()
    } else {
        text = textelement.value.toLowerCase()
    }
    out.textContent = text;
    let table = <HTMLTableElement>document.getElementById("list")
    let row = table.insertRow(0)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    cell1.textContent = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length.toString()
    cell2.textContent = text
}
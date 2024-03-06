function CurrentTime() {
    const d = new Date();
    document.getElementById("time-display").innerHTML = d.toDateString(d.getDate());
}
CurrentTime();
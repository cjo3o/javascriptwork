function aa() {
    // console.log(this);
    console.log(new.target);
}

aa();
new aa();
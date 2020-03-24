function timesTable(){
    for(i=1; i<=9; i++){
        for(j=2; j<9; j=j+2){
            process.stdout.write(`${j}*${i}=${i*j}\t`);
        }
        console.log();
    }
    console.log();
    for(i=1; i<=9; i++){
        for(j=3; j<=9; j=j+2){
            process.stdout.write(`${j}*${i}=${i*j}\t`);
        }
        console.log();
    }
}

timesTable();
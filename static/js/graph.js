queue()
    .defer(d3.csv, "data/Salaries.csv")
    .await(makeGraphs);
    
function makeGraphs(error,salaryData) {

 var ndx = crossfilter(salaryData);
 
 show_gender_balance(ndx);
 
}

function show_gender_balance(ndx){
    var dim = ndx.dimensions(dc.pluck("sex"));
    var group 
}
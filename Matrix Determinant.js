function determinant(m) {
  if(m[0].length==1){return m[0][0];}
  else if(m.length==2){return m[0][0]*m[1][1]-m[0][1]*m[1][0];}
  let sum=0;
  for(let i=0;i<m.length;i++){
    let tempM=[];
    for(let j=1;j<m.length;j++){
      if(i==m.length-1){tempM.push(m[j].splice(0,m.length-1));}
      else{tempM.push(m[j].slice(0,i).concat(m[j].slice(i+1)));}
    }
    sum+=m[0][i]*((-1)**(i))*determinant(tempM);
  }
  return sum;
};

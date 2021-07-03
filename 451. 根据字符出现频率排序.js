var frequencySort = function(s) {

    let myMap = new Map();
    
    Array.prototype.forEach.call(s,i=>{
        if(myMap.has(i)) myMap.set(i,myMap.get(i)+1)
        else myMap.set(i,1)
    })
    let myArr = Array.from(myMap);
    myArr.sort((a,b)=>{
      return b[1]-a[1] 
    })
    let str = ''
    myArr.forEach(i=>{
      // console.log(String(i[0]));
      let t = ''
      for(let y=0;y<i[1];y++){
        t = t + i[0]
      }
      str = str + t
    })
    console.log(str);
};

frequencySort("casgccaaaaasg");
const detail_list = [12,23,null,34,null,32,null,null];
const result1 = moveNullsKeepOrder(detail_list);
console.log(`result 1: ${result1}`);

function moveNullsKeepOrder(detail_list){
  return detail_list.sort((a,b)=>{
    if(a === null){
      return 1;
    };

    if(b === null){
      return -1;
    };

    if(a === b){
      return 0
    }
    return a < b ? -1 : 1;

  }

)};

// const detail_list = [12,23,null,34,null,32,null,null];
// const result1 = moveNullsKeepOrder(detail_list);
// console.log(`result 1 ${result1}`);

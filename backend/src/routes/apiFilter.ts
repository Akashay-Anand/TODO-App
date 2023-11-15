// import { query } from "express";

// class apiFilters {
//     query: any; // Define the 'query' property
//   queryStr: any; // Define the 'queryStr' property
//   / @ts-ignore
//     constructor(query, queryStr){
//         this.query = query;
//         this.queryStr = queryStr;
//     };

//     filter() {
//         const queryCopy = {...this.queryStr};

//         const remove = ['sort','field','q'];
//         remove.forEach(element => delete queryCopy[element]);

//         // let queryStr
//     };

//     sort(){
//         if(this.queryStr.sort){
//             const sortBy = this.queryStr.sort.split(',').join(' ');
//             this.query = this.query.sort(sortBy);
//         }else{
//             this.query = this.query.sort('-description');
//         };
//         return this;
//     };

//     searchbyQuery(){
//         if(this.queryStr.q){
//             const qu = this.queryStr.q.split('-').join(' ');
//             this.query = this.query.find({$text: {$search: "\"" + qu +"\""}});
//         };
//         return this;
//     };
// }

// export default apiFilters;

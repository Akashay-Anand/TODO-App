// import { Request, Response, NextFunction } from 'express';
// import mongoose from 'mongoose';
// import apiFilters from './apiFilter';
// import Todo from '../models/Todo';

// const getTodoList = async (req: Request, res: Response, next: NextFunction) => {
//  const FiltersApi = await new apiFilters(Todo.find(), req.query);

//  FiltersApi.filter();
//  FiltersApi.sort();
//  FiltersApi.searchbyQuery();

//  const todos = await FiltersApi.query;

//  res.status(200).json({
//     sucess: true,
//     result : todos.length,
//     data : todos
//  })

// }

// export default  getTodoList;
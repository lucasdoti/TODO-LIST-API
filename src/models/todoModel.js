import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const ItemSchema = new Schema({
    todo_title: {
        type: String,
        required: "Por favor, coloque o título de sua tarefa"
      },
    name: {type: String},
    created_date: {
      type: Date,
      default: Date.now
    }
});


export const ItemGroupSchema = new Schema({
  group_title: {
    type: String
  },
  todoitems:[{type: Schema.Types.ObjectId, ref: 'Item'}],
  created_date: {
  type: Date,
  default: Date.now
}


});


export interface ListItem{
  title: string;
  description: string;
  status: 'todo' | 'done';
}
export const todo: ListItem[] = [
  {title:  'Create library', description: 'Create separate project', status: 'todo'},
  {title:  'Add ngrx store', description: 'Add ngrx store', status: 'todo'},
  {title:  'Drag and drop', description: 'Create component with CDK drag and drop', status: 'todo'},
]

export const done: ListItem[] = [
  {title:  'Create app', description: 'Create test Angular app', status: 'done'},
  {title:  'Add app to git', description: 'Add Angular app to git repository', status: 'done'},
  {title:  'Routing', description: 'Create module with routing', status: 'done'},
]

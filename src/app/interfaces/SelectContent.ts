export interface SelectContent {
  type:  'select';
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder: string;
  
    
  }
  
type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: string; //类
}; //声明类型
  
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
  createRecordError: Error | null;
  createTagError: Error | null;
}

type Tag = {
    id: string;
    name: string;
  }
    
  type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success'|'duplicated';   //联合类型
    save: () => void;   //不返回
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
  }
  
interface Window{
  tagList: Tag[];
  findTag: (id: string) => Tag |undefined;
  createTag: (name: string) => void;   //不返回，也就是没有返回值
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}    //声明加在window上的属性
//.d.ts文件不需要引用，可以直接用，为全局引用
type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt: Date | undefined; //类
}; //声明类型
  

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
  updateTag: (id: string,name: string) => 'success' | 'not found' | 'duplicated';
}    //声明加在window上的属性
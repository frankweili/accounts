type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt: Date | undefined; //类
}; //声明类型
type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'success'|'duplicated';   //联合类型
  save: () => void;   //不返回
  }
const tagListModel: TagListModel= {
  data:[],
  fetch() { 
      this.data=JSON.parse(
        window.localStorage.getItem("tagList") || "[]"
      ) 
       return this.data
    },
    save() { 
        window.localStorage.setItem("tagList", JSON.stringify(this.data));
  },
  create(name) {
    if(this.data.indexOf(name)>=0){return 'duplicated'}
    this.data.push(name)
    this.save()
    return 'success'
    }
}
export default tagListModel
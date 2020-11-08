import { filter } from 'vue/types/umd';
import createId from '@/lib/createId.ts'
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
    const names=this.data.map(item=>item.name)
    if (names.indexOf(name) >= 0) { return 'duplicated' }
    const id =createId().toString()
    this.data.push({ id, name: name })
    this.save()
    return 'success'
  },
  update(id, name) {
    const idList = this.data.map(item => item.id)
    if (idList.indexOf(id) >= 0) { 
      const names = this.data.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        return 'duplicated'
      } else {
        const tag = this.data.filter(item => item.id === id)[0]
        tag.name = name
        tag.id=name
        this.save()
        return 'success'
      }
    } else {
      return 'not found'
    }//将输入的内容保存到localStorage上面
  },
  remove(id: string) {
    let index=-1
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i
        break
      }
    }
      this.data.splice(index, 1)
    this.save()
    
      return true
    
  }
}
export default tagListModel
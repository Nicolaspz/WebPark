

import Head from "next/head"
import styles from './styles.module.scss'
import {FormEvent, useState, ChangeEvent,useContext,useEffect} from 'react'
import { setupAPIClient } from "../../services/api"
import { toast } from "react-toastify"
import { canSSRAuth } from "../../utils/canSSRAuth"
import { Input } from '../../components/ui/input/index';
import { FiUpload } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar";
import { useRouter } from 'next/router';
import Category from '../../pages/category/index';
import {API_BASE_URL} from '../../config'



type ItemProps={
  id:string,
  name:string,
  organizationId:string
}
interface CategoryProps{
  categoryList:ItemProps[]
  isEditMode?: boolean;
  initialData?: {
    id: string;
    code: string;
    status: string;
    previlegio: string;
    
    // Adicione outras propriedades conforme necessário
  };
}

export default function FormProd({categoryList, isEditMode = false, initialData }: CategoryProps){
  const router = useRouter();
  const {user}= useContext(AuthContext);
  const [code, setCode]=useState('') //description
  const [status, setStatus]=useState(null)
  const [previlegio, setPrevilegio]=useState(null)
  
 
  
  //console.log(JSON.stringify(categoryList, null, 2));
  console.log(initialData);
 
  useEffect(() => {
    if (isEditMode && initialData) {
      // Preencha os campos do formulário com os dados iniciais
      setCode(initialData.code);
      setPrevilegio(initialData.previlegio);
      setStatus(initialData.status);
      
    }
    
  }, [isEditMode, initialData, categoryList]);

  
  
  async function handleRegister(event:FormEvent) {
    event.preventDefault()
   try {
    const data =new FormData();
    if(code === '' || previlegio === '' || status=== ''){
      toast.error("Preencha todos os campos!");
      return;
    }
    data.append('code', code);
    data.append('status', status);
    data.append('previlegio', previlegio);
    

    const apiClient = setupAPIClient();
    if (isEditMode) {
      // Lógica para editar o produto
      await apiClient.put('/vaga/edit', data, { params: { id: initialData.id } });
      toast.success('Produto atualizado com sucesso!');
      router.push('/vaga/list');
    } else {
      // Lógica para adicionar um novo produto
      await apiClient.post('/produts', data);
      toast.success('Produto cadastrado com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao cadastrar/editar produto:', error);
    toast.error('Ops, ocorreu um erro!');
    return;
  }
   setCode('');
   setPrevilegio('');
   setStatus('');
   
    
  }
  const changeStatus = (event) => {
    const value = event.target.value === "true";
    setStatus(value);
  };
    
  const changPrevilegio = (event) => {
    const value = event.target.value === "true";
    setPrevilegio(value);
  };
  


return(
  <>
  
      <main className={styles.container}>
      <h1>{isEditMode ? 'Editar Vaga' : 'Nova Vaga'}</h1>
      <form className={styles.form} onSubmit={handleRegister}>
        
        
        
        <input 
        type="text"
        placeholder="Digite o código da Vaga"
        className={styles.input}
        value={code}
        onChange={(e)=>setCode(e.target.value)}
        />
        <select value={status} onChange={changeStatus}>
            <option value="true">True</option>
            <option value="false">False</option>
        </select>

        <select value={previlegio} onChange={changPrevilegio}>
            <option value="true">True</option>
            <option value="false">False</option>
        </select>
        
        
        <button className={styles.buttonAdd} type="submit">
          <h1>{isEditMode ? 'Salvar a alteração' : 'Cadastrar'}</h1>
        </button>
        
      </form>
     </main>
  </>
)
}

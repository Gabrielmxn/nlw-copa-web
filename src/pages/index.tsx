import { Check } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar } from '../components/Avatar';
import { InfoFooter } from '../components/InfoFooter';
import { api } from '../services/api';

interface HomeProps {
  countPools: number;
  countUsers: number;
  countGuess: number;
}

export default function Home({ countPools, countUsers, countGuess }: HomeProps) {
  const [nameOfPool, setNameOfPool] = useState('');

  function handleNameOfPool(event: ChangeEvent<HTMLInputElement>) {
    setNameOfPool(event.target.value)
  }

  async function handleCreatePool(event: FormEvent) {
    event.preventDefault();

    try{
      const response = await api.post('/pools', {
        title: nameOfPool
      }); 

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      alert("Bolão criado com sucesso, o código foi copiado para a àrea de transfêrencia")
    }catch(er){
      console.log(er);
      alert("Falaha ao criar o bolão, tente novamente!");
    }
   
    setNameOfPool('')
  }

  return (
    <main className="max-w-[1120px] w-full mx-auto mt-16 gap-28">
      <div className="flex gap-28 mt-16 items-center">
        <div>
          <img src="logo.svg" alt="" />
          <div className="flex flex-col gap-10 mt-16">
            <h2 className="font-bold text-5xl">
              Crie seu próprio bolão da copa e compartilhe entre amigos!
            </h2>
            <div>
              <Avatar
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />


              <span className="text-green-300"> +{countUsers}</span>
              <span className="text-gray-200"> pessoas já estão usando</span>
            </div>

            <div>
              <div className="flex gap-2 mb-4">
                <input
                  className="py-4 pl-6 bg-gray-800 w-[306px] rounded"
                  type="text"
                  value={nameOfPool}
                  onChange={handleNameOfPool}
                  placeholder="Qual nome do seu bolão" />
                <button 
                  type="button" 
                  className="bg-yellow-500 flex-1 rounded text-gray-850 font-bold text-sm"
                  onClick={handleCreatePool}
                >
                  CRIAR MEU BOLÃO
                </button>
              </div>
              <p className="text-sm text-gray-300">Após cria seu botão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
            </div>

            <div className="flex justify-between">
              <InfoFooter count={countPools} text="Bolões criados" />
              <InfoFooter count={countGuess} text="Palpites enviados" />
            </div>

          </div>



        </div>

        <img src="aplicacao-trilha-ignite.svg" alt="" />
      </div>
    </main>
  )
}


export async function getStaticProps() {
  const [poolCountResponse, guessCountResponse, usersCountResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guess/count'),
    api.get('users/count')
  ])


  return {
    props: {
      countPools: poolCountResponse.data.count,
      countUsers: usersCountResponse.data.count,
      countGuess: guessCountResponse.data.count
    },
    revalidate: 60 * 60 * 24,
  }
}
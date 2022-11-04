import { Button } from '../components/Button'
import { Text } from '../components/text'
import { TextInput } from '../components/TextInput'
import { Logo } from '../logo'
import { Heading } from '../components/Heading'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from '../components/Checkbox'
import { FormEvent, useState } from 'react'
import axios from 'axios'

export function SignIn (){
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  function handleSingIn (event: FormEvent) {
    event.preventDefault();

    axios.post('/sessions' , {
      email: 'amogus@example.com' ,
      password: '12345678',
    })

    setIsUserSignedIn(true)
  }
    return (
      <div className="w-screen h-screen bg-bg-dark-blue flex items-center justify-center flex-col text-gray-217 overflow-auto">
        <header className='flex flex-col items-center'>
          <Logo />
          <Heading size='lg' className='mt-4'>React Lab</Heading>
          <Heading className='text-gray-193 mt-4' size='sm'>Faça login e comece a usar!</Heading>
        </header>
        <form onSubmit={handleSingIn} className='flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4'>
          {isUserSignedIn && <Text>Login realizado</Text> }
          <label htmlFor='email' className='flex flex-col gap-3'>
            <Text className="font-semibold">Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
            </TextInput.Root>
          </label>

          <label htmlFor='password' className='flex flex-col gap-3'>
            <Text className="font-semibold">Sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type='password' id='password' placeholder='***********' />
            </TextInput.Root>
          </label>
            
          <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-35'> Lembrar de mim por 30 dias</Text>
          </label>

          <Button type="submit" className='mt-4'>Entrar na plataforma</Button>
        </form>
        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text size='sm' className='text-gray-193 underline hover:text-gray-217'><a href="">Esqueceu sua senha?</a></Text>
          <Text size='sm' className='text-gray-193 underline hover:text-gray-217'><a href="">Não possui uma conta? Crie uma agora.</a></Text>
        </footer>
      </div>
    )
}

import { useHistory } from 'react-router'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase'

import * as S from './styled'

export function Home() {
  const history = useHistory()
  const [roomCode, setRoomCode] = useState('')
  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exits.')
      return
    }

    if (roomRef.val().endedAt) {
      alert('A sala está fechada')
      return
    }

    history.push(`/rooms/${roomRef.key}`)
  }

  return (
    <S.Wrapper>
      <S.Aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </S.Aside>
      <S.Main>
        <S.MainContent>
          <img src={logoImg} alt="logo" />
          <S.CreateRoomBtn onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo da Google" />
            Crie sua sala com o Google
          </S.CreateRoomBtn>
          <S.Separator className="separator">ou entre em uma sala</S.Separator>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </S.MainContent>
      </S.Main>
    </S.Wrapper>
  )
}

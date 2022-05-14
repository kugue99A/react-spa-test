import React from 'react'
import Header from '@components/Header'
import Menu from '@components/Menu'

type LayoutProps = {
  children?: React.ReactNode
}

const MainLayout: React.VFC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <Menu />
      <main className={'h-full w-full pt-[6rem] pl-[28rem]'}>
        <div className={'p-[3rem]'}>{props.children}</div>
      </main>
    </>
  )
}

export default MainLayout

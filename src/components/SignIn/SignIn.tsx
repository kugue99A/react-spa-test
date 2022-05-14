import React from 'react'
import Card from '@components/Card'

const SignIn: React.VFC = () => {
  return (
    <>
      <Card>
        <div>
          <h3>パスワードを入力してください</h3>
          <input type="password" placeholder="password" />
        </div>
      </Card>
    </>
  )
}

export default SignIn

import { useCallback, useRef, useState, useEffect } from 'react'
import { useActiveProvider } from '../../connectors'
import { SERVER_URL } from '../../constants'

export default function CreateTokens() {
  const provider = useActiveProvider()

  const [tokenname, settokenname] = useState('')
  const [fundid, setfundid] = useState('');
  const [contractaddress, setcontractaddress] = useState('')
  const [amount, setamount] = useState('');

  const createFund = async () => {
    const signer = provider.getSigner()
    const address = await signer.getAddress()

    const response = await fetch(SERVER_URL + 'fund/createfund', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'useraddress': address,
        'tokenname': tokenname
      })
    });
    const data = await response.json()
    console.log(data)

    settokenname('')
  }

  const createToken = async () => {
    const signer = provider.getSigner()
    const address = await signer.getAddress()

    const response = await fetch(SERVER_URL + 'fund/addtokentofund', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'fundid': fundid,
        'contractaddress': contractaddress,
        'amount': amount
      })
    });
    const data = await response.json()
    console.log(data)

    settokenname('')
  }
  
  return (
    <div>
      <h1>Create Index Fund</h1>
      <input placeholder='name' value={tokenname} onChange={(e => settokenname(e.target.value))}/>
      <button onClick={createFund}>Create Index Fund</button>
      <h1>Add Token to Fund</h1>
      <input placeholder='fund ID' value={fundid} onChange={(e => setfundid(e.target.value))}/>
      <br />
      <input placeholder='contract address' value={contractaddress} onChange={(e => setcontractaddress(e.target.value))}/>
      <br />
      <input placeholder='amount' value={amount} onChange={(e => setamount(e.target.value))}/>
      <button onClick={createToken}>Add Token</button>
    </div>
  )
}

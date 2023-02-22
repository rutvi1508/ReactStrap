import React from 'react'
import { InputGroupText, InputGroup, Input } from 'reactstrap';

function InputGroupPra() {
  return (
    <div>
      <h1>Input Group</h1>
      <InputGroup>
        <InputGroupText>
          @
        </InputGroupText>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>
          <Input
            addon
            aria-label="Checkbox for following text input"
            type="checkbox"
          />
        </InputGroupText>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupText>
          @example.com
        </InputGroupText>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText>
          $
        </InputGroupText>
        <InputGroupText>
          $
        </InputGroupText>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupText>
          $
        </InputGroupText>
        <InputGroupText>
          $
        </InputGroupText>
      </InputGroup>
    </div>
  )
}

export default InputGroupPra
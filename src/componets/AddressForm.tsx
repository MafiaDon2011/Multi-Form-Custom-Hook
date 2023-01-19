import { FormWrapper } from "../FormWrapper";

type AddressData = {
    street: string
    city: string
    county: string
    pCode: string
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({street, city, county, pCode, updateFields}: AddressFormProps) {
  return (
    <FormWrapper title="Address Form">
        <label>Street</label>
        <input autoFocus required type="text" value={street} onChange={e => updateFields({ street: e.target.value })}/>
        <label>City</label>
        <input required type="text" value={city} onChange={e => updateFields({ city: e.target.value })}/>
        <label>County</label>
        <input required type="text" value={county} onChange={e => updateFields({ county: e.target.value })}/>
        <label>Post Code</label>
        <input required type="text" value={pCode} onChange={e => updateFields({ pCode: e.target.value })}/>
    </FormWrapper>
  )
}

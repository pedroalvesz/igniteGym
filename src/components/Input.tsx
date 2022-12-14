import {Input as NativeBaseInput, IInputProps, FormControl} from 'native-base'

type InputProps = IInputProps & {
  errorMessage?: string | null;
}


export function Input({errorMessage, isInvalid, ...rest} : InputProps) {

  // operador que transforma variavel em booleano
  const invalid = !!errorMessage || isInvalid

return(
  <FormControl isInvalid={invalid} mb={4}>
    <NativeBaseInput
    bg="gray.700"
    color="white"
    width="100%"
    height="14"
    px={4}
    borderWidth={0}
    fontFamily="body"
    fontSize="sm"
    placeholderTextColor='gray.300'
    _focus={{
      bg: "gray.700",
      borderWidth: 1,
      borderColor: 'green.500'
    }}

    {...rest}
    />

    <FormControl.ErrorMessage _text={{ color: 'red.500'}}>
      {errorMessage}
    </FormControl.ErrorMessage>
  </FormControl>
)  
}
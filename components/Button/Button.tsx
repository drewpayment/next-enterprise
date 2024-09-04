import { Button } from "flowbite-react"

export function ButtonComponent({ ...props }) {
  return (
    <>
      <Button {...props}>{props.children}</Button>
    </>
  )
}

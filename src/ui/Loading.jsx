import { ThreeDots } from 'react-loader-spinner'

function Loading({height="40",width="75" }) {
  return (
   <ThreeDots
   height={height}
   width={width}
   radius={8}
   color="rgb(var(--color-primary-100))"
   wrapperStyle={{
    display:"flex",
    justifyContent:"center"
   }}
   visible={true}
   />
  )
}

export default Loading
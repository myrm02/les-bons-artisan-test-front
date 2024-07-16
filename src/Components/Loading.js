import styled from "styled-components"

const LoaderDiv = styled.div`
  display: inline-block; 
    border-radius: 9999px; 
    border-width: 4px; 
    border-color: currentColor; 
    border-style: solid; 
    width: 2rem; 
    height: 2rem; 
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
} 
`

const LoaderComponent = styled.span`
  overflow: hidden; 
    position: absolute; 
    padding: 0; 
    margin: -1px; 
    border-width: 0; 
    width: 1px; 
    height: 1px; 
    white-space: nowrap; 
`

export default function Loading() {
    return (
        <>
            <LoaderDiv>
                <LoaderComponent
                >
                    Loading...
                </LoaderComponent>
            </LoaderDiv>
        </>
    )
}
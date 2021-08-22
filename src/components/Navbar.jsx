import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  width: 60%;
`
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  
`;

const MenuItem = styled.li`
  
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <span><Logo>Agency</Logo></span>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Features</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      <span>button</span>
      </Wrapper>
    </Container>
  )
}

export default Navbar

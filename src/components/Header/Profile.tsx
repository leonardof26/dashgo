import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      {!!showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Leonardo Prado</Text>
          <Text color='gray.300' fontSize='small'>
            leonardopf26@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Leonardo Fontes'
        src='https://github.com/leonardof26.png'
      />
    </Flex>
  )
}

import { SaveIcon } from 'lucide-react';
 import { Container } from '../../components/Container';
 import { Button } from '../../components/Button';
 import { Input } from '../../components/Input';
 import { Header } from '../../components/Header';
import { MainTemplate } from '../../templates/MainTemplates';
 
 export function Settings() {
   return (
     <MainTemplate>
       <Container>
         <Header>Configurações</Header>
       </Container>
 
       <Container>
         <p style={{ textAlign: 'center' }}>
           Modifique as configurações para tempo de foco, descanso curso e
           descanso longo.
         </p>
       </Container>
 
       <Container>
         <form action='' className='form'>
           <div className='formRow'>
             <Input id='workTime' labelText='Foco' />
           </div>
           <div className='formRow'>
             <Input id='shortBreakTime' labelText='Descanso curto' />
           </div>
           <div className='formRow'>
             <Input id='longBreakTime' labelText='Descanso longo' />
           </div>
           <div className='formRow'>
             <Button
               icon={<SaveIcon />}
               aria-label='Salvar configurações'
               title='Salvar configurações'
             />
           </div>
         </form>
       </Container>
     </MainTemplate>
   );
 }
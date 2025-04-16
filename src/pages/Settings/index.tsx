import { SaveIcon } from 'lucide-react';
 import { Container } from '../../components/Container';
 import { Button } from '../../components/Button';
 import { Input } from '../../components/Input';
 import { Header } from '../../components/Header';
import { MainTemplate } from '../../templates/MainTemplates';
import { useTaskContext } from '../../contexts/TaskContext/userTaskContext';
import { useRef } from 'react';
 
 export function Settings() {
   const { state } = useTaskContext();
   const workTimeInput = useRef<HTMLInputElement>(null);
   const shortBreakTimeInput = useRef<HTMLInputElement>(null);
   const longBreakTimeInput = useRef<HTMLInputElement>(null);


    function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        const workTime = workTimeInput.current?.value;
        const shortBreakTime = shortBreakTimeInput.current?.value;
        const longBreakTime = longBreakTimeInput.current?.value;
    
        console.log(workTime, shortBreakTime, longBreakTime);
      }

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
         <form onSubmit={handleSaveSettings} action='' className='form'>
           <div className='formRow'>
             <Input 
               id='workTime' 
               labelText='Foco'
               ref={workTimeInput}
               defaultValue={state.config.workTime}
               />
           </div>
           <div className='formRow'>
             <Input 
                id='shortBreakTime' 
                labelText='Descanso curto' 
                ref={shortBreakTimeInput}
                defaultValue={state.config.shortBreakTime}
                />
           </div>
           <div className='formRow'>
             <Input 
               id='longBreakTime' 
               labelText='Descanso longo'
               ref={longBreakTimeInput}
               defaultValue={state.config.longBreakTime} 
               />
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
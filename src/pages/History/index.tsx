import { TrashIcon } from 'lucide-react';
 import { Container } from '../../components/Container';
 import { Button } from '../../components/Button';
 import { Header } from '../../components/Header';
 import { MainTemplate } from '../../templates/MainTemplates';
 
 import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/userTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
 
 export function History() {
    const {state} = useTaskContext()
   return (
     <MainTemplate>
       <Container>
         <Header>
           <span>History</span>
           <span className={styles.buttonContainer}>
             <Button
               icon={<TrashIcon />}
               color='red'
               aria-label='Apagar todo o histórico'
               title='Apagar histórico'
             />
           </span>
         </Header>
       </Container>
 
       <Container>
         <div className={styles.responsiveTable}>
           <table>
             <thead>
               <tr>
                 <th>Tarefa</th>
                 <th>Duração</th>
                 <th>Data</th>
                 <th>Status</th>
                 <th>Tipo</th>
               </tr>
             </thead>
 
             <tbody>
               {state.tasks.map((task) => {
                const taskTypeDictionary = {
                    workTime: 'Foco',
                    shortBreakTime: 'Descanso curto',
                    longBreakTime: 'Descanso longo',
                }
                 return (
                   <tr key={task.id}>
                     <td>{task.name}</td>
                     <td>{task.duration}min</td>
                     <td>{formatDate(task.startDate)}</td>
                     <td>{getTaskStatus(task, state.activeTask)}</td>
                     <td>{taskTypeDictionary[task.type]}</td>
                   </tr>
                 );
               })}
             </tbody>
           </table>
         </div>
       </Container>
     </MainTemplate>
   );
 }
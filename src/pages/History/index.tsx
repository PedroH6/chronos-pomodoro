import { TrashIcon } from 'lucide-react';
 import { Container } from '../../components/Container';
 import { Button } from '../../components/Button';
 import { Header } from '../../components/Header';
 import { MainTemplate } from '../../templates/MainTemplates';
 
 import styles from './styles.module.css';
 
 export function History() {
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
               {Array.from({ length: 20 }).map((_, index) => {
                 return (
                   <tr key={index}>
                     <td>Estudar</td>
                     <td>25min</td>
                     <td>20/04/2025 08:00</td>
                     <td>Completa</td>
                     <td>Foco</td>
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
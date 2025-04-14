import { useTaskContext } from "../../contexts/TaskContext/userTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import styles from "./styles.module.css"

export function Cycles() {
    const { state } = useTaskContext()

    const cycleStep = Array.from({ length: state.currentCycle })

    const cycleDescriptionMap = {
        workTime: 'foco',
        shortBreakTime: 'descanso curdo',
        longBreakTime: 'descanso longo'
    }
    return (
        <>
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cyclesDots}>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle)
                    return (
                        <span
                            key={nextCycle}
                            className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
                            aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                            title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                        ></span>
                    )
                })}  
            </div>
        </div>
        </>
    )
}
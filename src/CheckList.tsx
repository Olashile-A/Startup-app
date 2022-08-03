import {FC, Key} from "react"
import './App.css';
import { Change, SetupProps } from "./model";


const CheckList: FC<SetupProps & Change> = ({
    id, 
    title, 
    isChecked, 
    tasks, 
    onChange, 
    handledisabled 
    }) => {
    return(
        <>
            <div className='checklist-header'>
                <div className='index-round-circle'>
                        <p className='header-index'>{id + 1}</p>
                </div>
                <p className='mr-8 title'>{title} </p>
                <div className='check-icon'>{isChecked && <span>&#10003;</span>}</div>
            </div>
            <div>                 
                {tasks.map((task: { title: string, checked: boolean}, index: Key | null | undefined) => (
                    <div key={index} className='tasks'>
                        <input type='checkbox' 
                                id={task.title} 
                                name={task.title} 
                                checked={task.checked} 
                                disabled={handledisabled(id)} 
                                onChange={(e) => onChange(e, task.title)}
                            />
                        <label htmlFor={task.title}> {task.title}</label>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CheckList;
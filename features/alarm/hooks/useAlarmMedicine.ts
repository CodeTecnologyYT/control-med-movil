import {useEffect, useState, useRef} from 'react';
import {loadAlarmMedicineAction} from '@/features/alarm/actions/loadAlarmMedicineAction';
import {AlarmMedicine} from "@/features/alarm/models/AlarmMedicine";

export const useAlarmMedicine = () => {
    const [alarms, setAlarms] = useState<AlarmMedicine[]>([]);
    const canSortRevert = useRef<boolean>(false);

    useEffect(() => {
        loadAlarmMedicineAction().then(setAlarms)
    }, [])

    const deleteAlarms = (ids: string[]) => {
        setAlarms(prev => prev.filter(i => !ids.includes(i.id)))
    }

    const sortedAlarms = () => {
        canSortRevert.current = !canSortRevert.current;
        setAlarms(prev => [...prev].sort((a, b) => {
            if (canSortRevert.current) {
                return a.time - b.time;
            }
            return b.time - a.time;
        }))
    }

    return {
        alarms,
        // Methods
        deleteAlarms,
        sortedAlarms
    }
}
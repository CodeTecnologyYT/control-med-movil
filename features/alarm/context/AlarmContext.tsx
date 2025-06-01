import {createContext, PropsWithChildren, useContext, useState} from "react";
import {AlarmMedicine} from "@/features/alarm/models/AlarmMedicine";
import {useAlarmChecked} from "@/features/alarm/hooks/useAlarmChecked";
import {useAlarmMedicine} from "@/features/alarm/hooks/useAlarmMedicine";

interface AlarmProps {
    alarms: AlarmMedicine[];
    activeDeleteAlarm: boolean;
    isShow: boolean;
    checkedIds: string[];
    toggleCheckedAlarm: (id: string) => void;
    toggleShowCheckAlarm: (id: string) => void;
    changeToggleDelete: () => void;
    deleteAlarmsChecked: () => void;
    sortedAlarms: () => void;
}

export const AlarmContext = createContext({} as AlarmProps);

export const useAlarmContext = () => useContext(AlarmContext);

export const AlarmProvider = ({children}: PropsWithChildren) => {
    const [activeDeleteAlarm, setActiveDeleteAlarm] = useState<boolean>(false);
    const {isShow, checkedIds, toggleCheckedAlarm, toggleShowCheckAlarm,hiddenCheckAlarm} = useAlarmChecked();
    const {alarms, deleteAlarms, sortedAlarms} = useAlarmMedicine();

    const changeToggleDelete = () => {
        setActiveDeleteAlarm((prev) => !prev);
    }

    const deleteAlarmsChecked = () => {
        deleteAlarms(checkedIds);
        setActiveDeleteAlarm(false);
        hiddenCheckAlarm();
    }

    return (
        <AlarmContext.Provider value={{
            alarms,
            activeDeleteAlarm,
            isShow,
            checkedIds,
            // Methods
            changeToggleDelete,
            toggleCheckedAlarm,
            toggleShowCheckAlarm,
            deleteAlarmsChecked,
            sortedAlarms
        }}>
            {children}
        </AlarmContext.Provider>
    );

}
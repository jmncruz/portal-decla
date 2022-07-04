import { useParams } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Settings } from "./Settings";
import { Table } from "./Table";

export function Section() {
    const { param } = useParams<{ param: string }>()
    const project = () => {
        switch(param) {
  
          case "clients":   return <Table />
          case "settings":  return <Settings />

  
          default:    return <Dashboard />
        }
      }
    return (
        <section className="w-full">
            {
                project()       
            }

        </section>
    )
}
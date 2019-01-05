import * as React from "react";
import { MemberEntity } from "../../model/memberEntity";

interface Props {
  member: MemberEntity
}

export const MemberHeader:React.StatelessComponent<{}> = () => {
  return (
    <tr>
      <td>Avatar</td>
      <td>Id</td>
      <td>Name</td>
    </tr>
  )
}
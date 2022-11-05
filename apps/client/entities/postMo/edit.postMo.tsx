
import { 
  Edit,
  SimpleForm,
  
TextInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditPostMo(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="content" variant="outlined"   />

      </SimpleForm>
    </Edit>
  );
}
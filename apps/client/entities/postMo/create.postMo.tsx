
import { 
  Create,
  SimpleForm,
  
TextInput,
} from "react-admin";

// ------------------------------------------------

export default function CreatePostMo(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="content" variant="outlined"   />

        </SimpleForm>
      </Create>
    );
  }

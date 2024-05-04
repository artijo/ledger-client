import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function LedgerForm() {
  type Inputs = {
    title: string;
    description: string;
    type: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>บันทึกรายรับ-รายจ่าย</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>หัวข้อ</Label>
        <Input
          {...register("title", { required: "กระรุณากรอกหัวข้อ" })}
          type="text"
        />
        {errors.title && <p>{errors.title.message}</p>}
        <Label>รายละเอียด</Label>
        <Input {...register("description")} type="text" />
        <Label>ประเภท</Label>

        {/* <select {...register("type")}>
          <option value="income">รายรับ</option>
          <option value="expense">รายจ่าย</option>
        </select> */}

        <RadioGroup defaultValue="income" {...register("type")}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="income" id="income" />
            <Label htmlFor="income">รายรับ</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="expense" id="expense" />
            <Label htmlFor="expense">รายจ่าย</Label>
          </div>
        </RadioGroup>

        {errors.type && <p>{errors.type.message}</p>}
        <br />
        <Button variant="outline" type="submit">
          บันทึก
        </Button>
      </form>
    </>
  );
}

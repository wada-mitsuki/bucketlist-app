'use client';
import { useAddListProgressDrawer } from '@/app/(app)/bucket_memo/_components/add-list-progress-drawer/hooks/use-add-list-progress-drawer';
import { ProgressAddForm } from '@/app/(app)/bucket_memo/_components/progress-add-form/progress-add-form';
import { Button } from '@/components/shadcn-ui/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/shadcn-ui/ui/drawer';
import { ScrollArea, ScrollBar } from '@/components/shadcn-ui/ui/scroll-area';

export const AddListProgressDrawer = () => {
  const { progress, form, onSubmit, isOpen, onOpenChange } =
    useAddListProgressDrawer();

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button className="h-7 w-full" variant={'secondary'}>
          進捗を追加
        </Button>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="max-w-screen-md m-auto"
      >
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex justify-between items-center">
              <DrawerClose className="items-start">
                <div className="text-sm text-gray-500">キャンセル</div>
              </DrawerClose>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                進捗を追加
              </div>
              <Button
                variant={'link'}
                className="text-sm text-primary"
                onClick={form.handleSubmit(onSubmit)}
              >
                追加
              </Button>
            </div>
          </DrawerTitle>
          <DrawerDescription asChild>
            <div>
              <div className="border p-3">
                <ScrollArea className="max-h-[150px] overflow-y-auto">
                  <div className="text-left">過去進捗</div>
                  {progress.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <p>{item.created}</p>
                      <p>{item.content}</p>
                    </div>
                  ))}
                  <ScrollBar />
                </ScrollArea>
              </div>
              <ProgressAddForm form={form} />
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            追加する
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">キャンセル</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

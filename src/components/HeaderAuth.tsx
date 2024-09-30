import HeaderLogo from '@/components/HeaderLogo';
import LanguageSwitch from '@/components/LanguageSwitch';
import ThemeSwitch from '@/components/ThemeSwitch';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { adventurerNeutral } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ExitIcon, GearIcon } from '@radix-ui/react-icons';
import { useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <header className="flex w-full h-[10%]">
      <div className="flex items-center justify-center w-64 border-b border-r">
        <HeaderLogo />
      </div>
      <div className="flex items-center p-4 justify-between flex-grow">
        <Input className="max-w-sm" type="search" placeholder="Search" />
        <div className="flex items-center space-x-2">
          <UserMenu />
          <Separator orientation="vertical" className="h-6" />
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  const avatar = useMemo(() => {
    return createAvatar(adventurerNeutral, {
      scale: 70,
      size: 128,
      seed: 'b43af8a3-539a-4da4-94ac-9ccc36421b48',
      backgroundColor: ['f97316'],
      eyes: ['variant14'],
    }).toDataUri();
  }, []);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar asChild>
            <button>
              <AvatarImage src={avatar} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </button>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => setOpen(true)}>
            Profile
            <GearIcon className="w-4 h-4 ml-auto" />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/login">
              <FormattedMessage id="button.logout" />
              <ExitIcon className="w-4 h-4 ml-auto" />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ProfileSheet open={open} setOpen={setOpen} />
    </>
  );
};

const ProfileSheet = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AuthHeader;

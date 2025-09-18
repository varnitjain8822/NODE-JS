import java.io.*;
import java.net.*;

public class myclient {
  puvlic static void main (String [] args){
    try{
      Socket s = new Socket (host:"localhost",port:6666);
      DataOutputStream dout = new DataOutputStream (s.getOutputStream());
      dout.writeUTF(str:"hello server");
      dout.flush();
      dout.close();
      s.close();
    }
    catch(Exception e){
      System.out.println(e);
    }
  }



public class MyServer{
  public static void main (String [] args)
  {
    try{
      ServerSocket ss = new ServerSocket(port:6666);
      Socket s = ss.accept();
      DataInputStream din = new DataInputStream(s.getInputStream())
      String str (String)din.readUTF();
      System.out.print("message from client:"+str);
      din.close();
      s.close();
      ss.close();
    }
    catch(Exception e )
    System.out.println(e);
  }
}
}
import { Card } from "~/components/ui/card";
import { Link } from "~/components/ui/link";

export default function Page() {
  return (
    <Card className="max-w-screen-md mx-auto flex flex-col gap-6 text-text-prose md:p-9">
      <h1 className="text-3xl text-text-primary font-bold">glui starter</h1>
      <p>
        <Link href="https://joulev.dev/glui">
          Learn more about glui, a glassmorphic component collection
        </Link>
        .
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas
        id justo sit amet mollis. Nulla facilisi. Sed ante turpis, euismod eu
        dignissim nec, suscipit tempor elit. Duis enim neque, fringilla nec
        ornare at, viverra in nunc. Suspendisse tincidunt lorem vel gravida
        porta. Sed in neque vel erat dignissim viverra at nec mauris. Morbi
        hendrerit purus sed porta imperdiet. Vivamus in ipsum at mi consequat
        egestas a vel diam. Vivamus dictum magna faucibus justo dictum mattis.
        Fusce sit amet quam ullamcorper, dictum eros quis, iaculis lectus.
        Curabitur ultricies dolor ut varius ornare. Quisque condimentum in nisl
        id feugiat. Donec sollicitudin leo quis convallis lobortis.
      </p>
      <p>
        Donec ut efficitur ligula. Suspendisse consequat dolor eget ex rutrum
        feugiat. Nulla hendrerit lorem quis libero pharetra ornare. Aenean at
        massa luctus nisi eleifend semper ac in ex. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Praesent mattis auctor pharetra. Donec orci tortor, feugiat eget sapien
        at, elementum sodales dolor. Nam vehicula malesuada risus ac varius.
        Etiam laoreet erat est, a aliquet risus porta vel. Nulla finibus id
        sapien ac imperdiet.
      </p>
      <p>
        Cras tristique viverra tincidunt. Curabitur nec nisl ac est rutrum
        pulvinar eget nec massa. Sed vitae maximus orci, a tempor nisi. Nam
        placerat, nulla vel tincidunt elementum, tellus nisi faucibus nulla, at
        blandit odio nunc quis velit. Nulla egestas interdum libero, sit amet
        interdum urna fringilla in. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. In aliquet ipsum
        eget neque convallis, in consequat arcu eleifend. Phasellus vestibulum
        gravida dolor a bibendum. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Nulla metus tellus,
        dictum sed magna et, lobortis porttitor lorem.
      </p>
      <p>
        Integer sed odio ac purus pellentesque ornare. Morbi aliquam orci quis
        augue dictum, eget congue magna viverra. Vestibulum tincidunt ornare
        bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Proin lacinia laoreet risus, non dapibus sapien porta quis. Aliquam in
        pretium lorem. Aenean ultrices sit amet felis at bibendum. Aliquam
        interdum, est id tincidunt dictum, odio libero scelerisque felis,
        commodo pellentesque nibh odio non nisi. Mauris at massa neque. Proin
        sapien urna, auctor non nibh et, placerat volutpat justo. Curabitur ante
        sem, feugiat ullamcorper bibendum in, venenatis non justo.
      </p>
      <p>
        Sed fermentum volutpat lacus, a ornare tortor fringilla sit amet. Sed
        nec dolor vulputate, pulvinar nunc sed, molestie augue. Nunc efficitur
        nunc quis dignissim tempus. Cras dapibus mi id nisl commodo, non
        convallis dui maximus. Sed sollicitudin iaculis dolor, vitae dignissim
        neque dignissim ac. Integer consectetur justo risus, eu ornare nisi
        rutrum vitae. Proin id convallis magna. Nulla facilisi.
      </p>
    </Card>
  );
}
